import { createReducer } from '@reduxjs/toolkit'
import { templateCenterActions } from './template-center-actions'

const initialTemplateCenterState = {}

export const templateCenterReducer = createReducer(
  initialTemplateCenterState,
  (builder) => {
    builder
      .addCase(
        templateCenterActions.getProjectTemplates.success,
        (state, action) => {
          const { templates } = action.payload
          state.projectTemplates = templates
        }
      )

      .addCase(
        templateCenterActions.createCheckListTemplate.success,
        (state, action) => {
          const { template } = action.payload
          state.checkListTemplates = [
            ...(state.checkListTemplates ?? []),
            template,
          ]
        }
      )
  }
)
