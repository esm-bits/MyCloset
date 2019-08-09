import { Instance, types } from "mobx-state-tree";

const Photo = types.model("Photo", {});

export type PhotoType = Instance<typeof Photo>;

export default Photo;
