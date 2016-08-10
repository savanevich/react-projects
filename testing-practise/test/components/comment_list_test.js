import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component = null;

  beforeEach(() => {
    const props = { comments: ['afsasfas', 'New comment']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('afsasfas');
  });
});
