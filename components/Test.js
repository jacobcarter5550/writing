import { useEffect, useState } from "react";
import Loading from "./Loading"
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { notionCreate, pageCreate, dbQuery } from "../lib/api";

function Test ({user}) {

return (<>
    <button onClick={()=>{notionCreate()}}>testXreate</button>
    <button onClick={()=>{pageCreate()}}>create the page</button>
    <button onClick={()=>{dbQuery()}}>Queeeery</button>
</>)
}

export default Test