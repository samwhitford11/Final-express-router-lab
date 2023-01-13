const URL = "https://express-react-lab-2uoq.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/project")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}
