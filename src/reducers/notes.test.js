import notes, {
  ADD_NOTE,
  REMOVE_NOTE,
  REORDER_NOTE,
  UPDATE_NOTE,
  DELETE_ALL_NOTES
} from './notes.js';
/*
 * Ваша задача - написать редьюсер, который будет пребразовывать стейт
 * в соотвествии с теми действиями над заметками которые будут диспатчиться.
 * У каждой заметки есть уникальное поле - id.
 */
describe('notes reducer', () => {
  it('should delete all notes', () => {
    expect(notes([{}, {}], { type: DELETE_ALL_NOTES })).toEqual([]);
  });

  it('should add a note', () => {
    expect(notes(
      [{id: 1, name: 'test'}],
      {
        type: ADD_NOTE,
        note: {id: 2, name: 'new'}
      }
    )).toEqual([
      {id: 1, name: 'test'},
      {id: 2, name: 'new'}
    ]);
  });

  it('should update the note', () => {
    expect(notes(
      [
        {id: 1, name: 'test'},
        {id: 2, name: 'old'}
      ],
      {
        type: UPDATE_NOTE,
        note: { id: 2, name: 'new'}
      }
    )).toEqual([
      {id: 1, name: 'test'},
      {id: 2, name: 'new'}
    ]);
  });

  it('should remove note', () => {
    expect(notes(
      [
        {id: 1, name: 'test'},
        {id: 2, name: 'old'}
      ],
      {
        type: REMOVE_NOTE,
        id: 2
      }
    )).toEqual([
      {id: 1, name: 'test'}
    ]);
  });

  it('should rorder notes', () => {
    expect(notes(
      [
        {id: 1, name: 'test'},
        {id: 3, name: 'new'},
        {id: 2, name: 'old'}
      ],
      {
        type: REORDER_NOTE,
        fromId: 2,
        toId: 1
      }
    )).toEqual([
      {id: 2, name: 'old'},
      {id: 3, name: 'new'},
      {id: 1, name: 'test'}
    ]);
  });
});

