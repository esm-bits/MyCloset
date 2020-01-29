import { SnapshotOrInstance, types } from 'mobx-state-tree';

const Photo = types.model('Photo', {});

export type PhotoType = SnapshotOrInstance<typeof Photo>;

export default Photo;
