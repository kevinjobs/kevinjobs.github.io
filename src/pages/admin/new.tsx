import React from 'react';
import PostEditor from '../_partial/post-editor';

export interface AdminNewPageProps {}

const AdminNewPage: React.FC<AdminNewPageProps> = props => {
  return (
    <div className="Admin-NewPage">
      <PostEditor post={undefined} onSubmit={(e: any) => console.log(e)} />
    </div>
  )
}

export default AdminNewPage;