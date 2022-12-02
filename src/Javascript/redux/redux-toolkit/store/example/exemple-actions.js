import storeHelper from '../../helpers/store-helper'
import { templateCenterThunks } from './template-center-thunks'

export const templateCenterActionTypePrefix = 'templateCenter/'

export const templateCenterActions = {
  getProjectTemplates: storeHelper.createThunk(
    `${templateCenterActionTypePrefix}getProjectTemplates`,
    templateCenterThunks.getProjectTemplates
  ),

  createCheckListTemplate: storeHelper.createThunk(
    `${templateCenterActionTypePrefix}createCheckListTemplate`,
    templateCenterThunks.createCheckListTemplate
  ),
}
