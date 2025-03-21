import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../../declarations/dms_icp_backend";

const agent = new HttpAgent({ host: "https://ic0.app" });
export const dmsActor = Actor.createActor(idlFactory, { agent, canisterId });
