import mk from 'mockjs';
const users = mk.mock({
  'list|10': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
});

interface QueryUserInfo {
  keyword?: string;
  pageNo?: number;
  pageSize?: number;
}

export default {
  'GET /api/v1/queryUserList': (req: QueryUserInfo, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
