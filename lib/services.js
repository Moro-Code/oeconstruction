import fs from "fs"
import path from "path"

const servicesDirectory = path.join(process.cwd(), "data", "services")

export function getAllServices(){
    const serviceJsonPath = path.join(servicesDirectory, "services.json")
    const fileContents = fs.readFileSync(serviceJsonPath, "utf8")
    return JSON.parse(fileContents)
}