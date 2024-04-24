import { PageContainer } from '@ant-design/pro-components';
import { useEffect } from 'react';
import request from 'umi-request';

const HomePage: React.FC = () => {
  // test
  useEffect(() => {
    (async () => {
      const res = await request('/api/v1/queryUserList', {
        data: {
          pageSize: 10,
          current: 1,
        },
      });
      console.log(res.data);
    })();
  }, []);

  return (
    <PageContainer ghost>
      <div>1</div>
    </PageContainer>
  );
};

export default HomePage;
