const hello = () => {
    return "hello!"
}

export default hello;

import { hello } from "./module";

hello();