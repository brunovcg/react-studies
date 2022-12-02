import TemplateCenterService from '../../service/exemple-service'

export const templateCenterThunks = {
  async getProjectTemplates({ dispatch, actionSuccess, actionError }) {
    try {
      const response = await TemplateCenterService.getProjectTemplates()
      if (response.isSuccess) {
        const templates = response.data?.project_templates ?? []
        dispatch(actionSuccess({ templates }))
      } else {
        dispatch(actionError())
      }
    } catch (error) {
      dispatch(actionError())
    }
  },

  async createCheckListTemplate(
    { dispatch, actionSuccess, actionError },
    payload,
    callback
  ) {
    try {
      const response = await TemplateCenterService.createCheckListTemplate(
        payload
      )
      callback?.(response)
      if (response.isSuccess) {
        const template = response.data?.task_check_list_templates?.[0]
        if (template) {
          dispatch(actionSuccess({ template }))
        }
      } else {
        dispatch(actionError())
      }
    } catch (error) {
      dispatch(actionError())
    }
  },

  async projectTemplateModified(
    { dispatch, actionSuccess, actionError },
    templateId
  ) {
    try {
      const response = await TemplateCenterService.getProjectTemplate(
        templateId
      )
      if (response.isSuccess) {
        const template = response.data?.project_templates?.[0]
        if (template) {
          dispatch(actionSuccess({ template }))
        }
      } else {
        dispatch(actionError())
      }
    } catch (error) {
      dispatch(actionError())
    }
  },
}
