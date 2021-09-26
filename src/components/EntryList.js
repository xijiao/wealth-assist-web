
import { BACKEND_BASE_URL } from '../config';
import Entry from "./Entry";
import Fetch from "./Fetch";

export default function EntryList({userId}) {
    return (
        <Fetch
            url={BACKEND_BASE_URL + "/" + userId + "/entry"}
            renderSuccess={(data) => (data.map(entry => <Entry entry={entry}/>))}
        />
    );
}