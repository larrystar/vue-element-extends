import { DELETE, POST, GET } from 'xe-ajax-mock'
import Helper from './helper'

GET('/api/conf/region/list', require('./conf/region.json'))
GET('/api/conf/sex/list', require('./conf/sex.json'))
GET('/api/conf/columns/list', require('./conf/columns.json'))

class RoleVO {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.describe = data.describe
    this.createTime = data.createTime
    this.updateTime = data.updateTime
  }
}
const roleHelper = new Helper(require('./role/list.json'), RoleVO)
DELETE('/api/role/delete/{id}', roleHelper.deleteByPathVariable())
POST('/api/role/add', roleHelper.insertByBody())
POST('/api/role/update', roleHelper.updateByBody())
POST('/api/role/save', roleHelper.saveListByBody())
GET('/api/role/list', roleHelper.findList({ max: 10 }))
GET('/api/role/page/list/{pageSize}/{currentPage}', roleHelper.findPageList())

class UserVO {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.password = data.password
    this.sex = data.sex
    this.role = data.role
    this.region = data.region
    this.email = data.email
    this.age = data.age
    this.rate = data.rate
    this.flag = data.flag
    this.phone = data.phone
    this.describe = data.describe
    this.describe2 = data.describe2
    this.describe3 = data.describe3
    this.createTime = data.createTime
    this.updateTime = data.updateTime
    this.attr1 = data.attr1
    this.attr2 = data.attr2
    this.attr3 = data.attr3
    this.attr4 = data.attr4
    this.attr5 = data.attr5
    this.attr6 = data.attr6
  }
}
const userHelper = new Helper(require('./user/list.json'), UserVO)
DELETE('/api/user/delete/{id}', userHelper.deleteByPathVariable())
POST('/api/user/add', userHelper.insertByBody())
POST('/api/user/update', userHelper.updateByBody())
POST('/api/user/save', userHelper.saveListByBody())
GET('/api/user/list', userHelper.findList({ max: 10 }))
GET('/api/user/page/list/{pageSize}/{currentPage}', userHelper.findPageList())

class FileVO {
  constructor (data) {
    this.id = data.id
    this.parentId = data.parentId
    this.name = data.name
    this.size = data.size
    this.type = data.type
    this.createTime = data.createTime
    this.updateTime = data.updateTime
  }
}
const fileHelper = new Helper(require('./file/list.json'), FileVO)
DELETE('/api/file/delete/{id}', fileHelper.deleteByPathVariable())
POST('/api/file/add', fileHelper.insertByBody())
POST('/api/file/update', fileHelper.updateByBody())
POST('/api/file/save', fileHelper.saveListByBody())
GET('/api/file/list', fileHelper.findList())
GET('/api/file/page/list/{pageSize}/{currentPage}', fileHelper.findPageList())