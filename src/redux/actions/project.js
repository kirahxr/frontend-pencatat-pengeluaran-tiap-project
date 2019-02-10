import axios from 'axios';
import { ip } from "../../Server";

export function ALL_PROJECTS(){
    return {
        type: "ALL_PROJECTS",
        payload: axios.get(ip+'/api/v0/projects')
    }
}