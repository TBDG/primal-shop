// Every new area needs an import
import general from './general';

class Content {
    constructor() {
        this.contentToBeUsed = {}
    }

    getLocal() {
        return {
            // Add new areas here also
            general,
        };
    }

    async retrieveContent() {
        // This is placeholder. in case we want to get content from a server
        let isUsingLocal = true;
        if (isUsingLocal) {
            return this.contentToBeUsed = this.getLocal();
        } else {
            // future get remote content
        }
    }

    getContent() {
        return this.contentToBeUsed;
    }
}
const instance = new Content();

export const retrieveContent = instance.retrieveContent.bind(instance)
export const getContent = instance.getContent.bind(instance)

