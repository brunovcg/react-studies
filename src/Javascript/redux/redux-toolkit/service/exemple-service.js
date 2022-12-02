import APIRequestHelper from '../../../../models/helpers/api-request-helper'

const TemplateCenterService = {
  async getProjectTemplates() {
    return APIRequestHelper.sendRequest(
      'POST',
      'project_templates/filtered?includes=project,member,project_members'
    )
  },

  async createCheckListTemplate(payload) {
    return APIRequestHelper.sendRequest(
      'POST',
      'task_check_list_templates/',
      payload
    )
  },
}
export default TemplateCenterService
