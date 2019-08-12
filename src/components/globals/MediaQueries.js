export const screen = {
    phoneS: (...args) => {
        const styles = args;
        return `@media (max-width: 320px){${styles}}`
    },
    phoneM: (...args) => {
        const styles = args;
        return `@media (max-width: 375px){${styles}}`
    },
    phoneL: (...args) => {
        const styles = args;
        return `@media (max-width: 411px){${styles}}`
    }
}

/*
iphone5 320
-deleted GalaxyS5 360
Pixel2 411
-deleted iphonePlus 414
iphone6 375
-deleted iphoneX 375
Ipad 768
ipad Pro 1024
*/

/*
phoneS iphone5 320
phoneM iphone6 375 
phoneL pixel2 411
*/