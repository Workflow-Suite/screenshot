import { screenshot } from "./stores"

export const openImage = () => {
    let input = document.createElement('input');
    input.type = "file";
    input.onchange = () => {
        if (input.files) {
            screenshot.set(input.files[0])
        }
    }
    input.click();
}