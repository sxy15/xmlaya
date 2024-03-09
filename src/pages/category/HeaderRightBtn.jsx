import React from 'react';

import {Item} from 'react-navigation-header-buttons';

function HeaderRightBtn({handleEdit, edit}) {
  return <Item title={edit ? '完成' : '编辑'} onPress={handleEdit} />;
}

export default HeaderRightBtn;
