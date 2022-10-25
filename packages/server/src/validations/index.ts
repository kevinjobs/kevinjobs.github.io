/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 11:57:40
 * @LastEditTime : 2022-03-17 18:07:11
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\validations\index.ts
 * @Description  : 
 */
const register = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 3,
        maxLength: 32,
      },
      password: {
        type: 'string',
        minLength: 8,
        maxLength: 20,
      },
      role: {
        type: 'integer',
        enum: [0, 1, 2, 3],
      },
      invitation: {
        type: 'string',
        minLength: 36,
        maxLength: 36,
      }
    },
    required: ['name', 'password', 'role', 'invitation']
  }
};

export {
  register,
}
