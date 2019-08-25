export const screen = {
    phoneS: (...args) => {
        const styles = args;
        return `@media only screen and (max-width: 360px){${styles}}`
    },
    phoneM: (...args) => {
        const styles = args;
        return `@media only screen and (max-width: 375px){${styles}}`
    },
    phoneL: (...args) => {
        const styles = args;
        return `@media only screen and (max-width: 414px){${styles}}`
    },
    Tablet: (...args) => {
        const styles = args;
        return `@media only screen and (max-width: 700px){${styles}}`
    }
}