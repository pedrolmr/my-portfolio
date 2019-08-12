export const screen = {
    phoneS: (...args) => {
        const styles = args;
        // return `@media (max-width: 320px){${styles}}`
        return `@media only screen and (max-width: 360px){${styles}}`
    },
    phoneM: (...args) => {
        const styles = args;
        // return `@media (max-width: 375px){${styles}}`
        return `@media only screen and (max-width: 375px){${styles}}`
    },
    phoneL: (...args) => {
        const styles = args;
        // return `@media (max-width: 411px){${styles}}`
        return `@media only screen and (max-width: 414px){${styles}}`
    }
}