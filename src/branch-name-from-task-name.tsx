import {Clipboard, closeMainWindow} from "@raycast/api";
import {cond, T, is, always} from "ramda";

const convert = cond([
    [is(String), (s:string) => s
        .toLowerCase()
        .replace(/[ _/\\\n]/g, '-')
        .replace(/[^\w-]+/g,'')
    ],
    [T, always("cant-do-a-slug")]
]);

export default async () => {
    const text:any = await Clipboard.readText();
    await Clipboard.copy(convert(text));
    await closeMainWindow({clearRootSearch: true});
};

