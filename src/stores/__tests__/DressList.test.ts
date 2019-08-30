import { DressListStore } from '@src/stores/DressList';

describe('DressListStore', () => {
  it('addDressで服を追加できる', () => {
    const store = DressListStore.create({ dressList: [] });
    expect(store.dressList.length).toBe(0);
    store.addDress({ id: 0 });
    expect(store.dressList.length).toBe(1);
  });
});
