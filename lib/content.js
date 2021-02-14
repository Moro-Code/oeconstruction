import fs from "fs"
import path from "path"
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";


function _getContentPath(contentType) {
    return path.join(process.cwd(), "data", contentType)
}

export function getSortedContent(contentType){
    const contentDirectory = _getContentPath(contentType)
    const fileNames = fs.readdirSync(contentDirectory)
    const allContentData = fileNames.map(fileName => {
        // Remove .md from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read  markdown file as string
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray matter lib to parse and post metadata
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    // Sort posts by date
    return allContentData.sort((a, b) => {
        if(a.date < b.date){
            return 1
        }else {
            return -1
        }
    })
}

export function getAllContentIds(contentType){
    const contentDirectory = _getContentPath(contentType)
    const fileNames = fs.readdirSync(contentDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getContentDataById(contentType, id){
    const fullPath = path.join(_getContentPath(contentType), `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}