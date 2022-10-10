import { createContext, useReducer, useMemo } from 'react';

export const SaveTaskListAsTemplateContext = createContext();

export const SaveTemplateAction = {
  setName: 'set_name',
  setDescription: 'set_description',
  setCopyTaskListService: 'set_copy_task_list_service',
  setCopyTaskListCustomFields: 'set_copy_task_list_custom_fields',
  includeTaskArchivedStatus: 'include_task_archived_status',
  setCopyTask: 'set_copy_task',
  setCopyTaskAttachments: 'set_copy_task_attachments',
  setCopyTaskRecurringSettings: 'set_copy_task_recurring_settings',
  setCopyTaskComments: 'set_copy_task_comments',
  setCopyTaskPriority: 'set_copy_task_priority',
  setCopyTaskSubtasks: 'set_copy_task_subtasks',
  setCopyTaskStatus: 'set_copy_task_status',
  setCopyTaskNumber: 'set_copy_task_number',
  setCopyTaskEstimatedHours: 'set_copy_task_estimated_hours',
  setCopyTaskService: 'set_copy_task_service',
  setCopyTaskChecklists: 'set_copy_task_checklists',
  setCopyTaskBusinessRuleRoi: 'set_copy_task_business_value_roi',
  setCopyTaskAssigness: 'set_copy_task_assignees',
  setCopyTaskComplexity: 'set_copy_task_complexity',
  setCopyTaskCustomFieldsValues: 'set_copy_task_custom_fields_value',
  setCopyTaskDependency: 'set_copy_task_dependency',
  setCopyTaskDescription: 'set_copy_task_description',
  setCopyEverything: 'set_copy_everything',
};

export const includeTaskArchivedStatusEnum = {
  No: 0,
  Yes: 1,
  YesButMakeThenUnarchived: 2,
};

const payloadReducer = (state, action) => {
  const actions = {
    [SaveTemplateAction.setName]: (payload) => ({ ...state, name: payload?.name }),
    [SaveTemplateAction.setDescription]: (payload) => ({ ...state, description: payload?.description }),
    [SaveTemplateAction.setCopyTaskListService]: (payload) => ({ ...state, copy_task_list_service: payload }),
    [SaveTemplateAction.setCopyTaskListCustomFields]: (payload) => ({ ...state, copy_task_list_custom_fields: payload }),
    [SaveTemplateAction.includeTaskArchivedStatus]: (payload) => ({ ...state, include_task_archived_status: payload }),
    [SaveTemplateAction.setCopyTask]: (payload) => ({ ...state, copy_task: payload }),
    [SaveTemplateAction.setCopyTaskAttachments]: (payload) => ({ ...state, copy_task_attachments: payload }),
    [SaveTemplateAction.setCopyTaskRecurringSettings]: (payload) => ({ ...state, copy_task_recurring_settings: payload }),
    [SaveTemplateAction.setCopyTaskComments]: (payload) => ({ ...state, copy_task_comments: payload }),
    [SaveTemplateAction.setCopyTaskPriority]: (payload) => ({ ...state, copy_task_priority: payload }),
    [SaveTemplateAction.setCopyTaskSubtasks]: (payload) => ({ ...state, copy_task_subtasks: payload }),
    [SaveTemplateAction.setCopyTaskStatus]: (payload) => ({ ...state, copy_task_status: payload }),
    [SaveTemplateAction.setCopyTaskNumber]: (payload) => ({ ...state, copy_task_number: payload }),
    [SaveTemplateAction.setCopyTaskEstimatedHours]: (payload) => ({ ...state, copy_task_estimated_hours: payload }),
    [SaveTemplateAction.setCopyTaskService]: (payload) => ({ ...state, copy_task_service: payload }),
    [SaveTemplateAction.setCopyTaskChecklists]: (payload) => ({ ...state, copy_task_checklists: payload }),
    [SaveTemplateAction.setCopyTaskBusinessRuleRoi]: (payload) => ({ ...state, copy_task_business_value_roi: payload }),
    [SaveTemplateAction.setCopyTaskAssigness]: (payload) => ({ ...state, copy_task_assignees: payload }),
    [SaveTemplateAction.setCopyTaskComplexity]: (payload) => ({ ...state, copy_task_complexity: payload }),
    [SaveTemplateAction.setCopyTaskCustomFieldsValues]: (payload) => ({ ...state, copy_task_custom_fields_values: payload }),
    [SaveTemplateAction.setCopyTaskDependency]: (payload) => ({ ...state, copy_task_dependency: payload }),
    [SaveTemplateAction.setCopyTaskDescription]: (payload) => ({ ...state, copy_task_description: payload }),
    [SaveTemplateAction.setCopyEverything]: (payload) => ({
      ...state,
      ...{
        copy_task_attachments: payload,
        copy_task_recurring_settings: payload,
        copy_task_comments: payload,
        copy_task_priority: payload,
        copy_task_subtasks: payload,
        copy_task_status: payload,
        copy_task_number: payload,
        copy_task_estimated_hours: payload,
        copy_task_service: payload,
        copy_task_checklists: payload,
        copy_task_business_value_roi: payload,
        copy_task_assignees: payload,
        copy_task_complexity: payload,
        copy_task_custom_fields_values: payload,
        copy_task_dependency: payload,
        copy_task_description: payload,
      },
    }),
  };

  return actions[action.type]?.(action.payload) ?? state;
};

function SaveTaskListAsTemplateProvider({ children, rootProps }) {
  const initialState = {
    name: '',
    description: '',
    copy_task_list_service: true,
    copy_task_list_custom_fields: true,
    include_task_archived_status: includeTaskArchivedStatusEnum.No,
    copy_task: true,
    copy_task_attachments: true,
    copy_task_recurring_settings: true,
    copy_task_comments: true,
    copy_task_priority: true,
    copy_task_subtasks: true,
    copy_task_status: true,
    copy_task_number: true,
    copy_task_estimated_hours: true,
    copy_task_service: true,
    copy_task_checklists: true,
    copy_task_business_value_roi: true,
    copy_task_assignees: true,
    copy_task_complexity: true,
    copy_task_custom_fields_values: true,
    copy_task_dependency: true,
    copy_task_description: true,
  };

  const { open, onClose, id, data } = rootProps;
  const [templatePayload, dispatchPayload] = useReducer(payloadReducer, initialState);

  const isDisabledTaskOptions = useMemo(() => templatePayload.copy_task === false, [templatePayload]);
  const taskListCustomFieldsDisabled = useMemo(() => !templatePayload.copy_task_List_custom_fields, [templatePayload]);

  const copyTaskEverything = useMemo(() => {
    return (
      templatePayload.copy_task_attachments &&
      templatePayload.copy_task_recurring_settings &&
      templatePayload.copy_task_comments &&
      templatePayload.copy_task_priority &&
      templatePayload.copy_task_subtasks &&
      templatePayload.copy_task_status &&
      templatePayload.copy_task_number &&
      templatePayload.copy_task_estimated_hours &&
      templatePayload.copy_task_service &&
      templatePayload.copy_task_checklists &&
      templatePayload.copy_task_business_value_roi &&
      templatePayload.copy_task_assignees &&
      templatePayload.copy_task_complexity &&
      templatePayload.copy_task_dependency &&
      templatePayload.copy_task_description &&
      (taskListCustomFieldsDisabled ? templatePayload.copy_task_custom_fields_values : true)
    );
  }, [templatePayload]);

  const isDisabledCustomFields = useMemo(() => !templatePayload.copy_task_list_custom_fields, [templatePayload]);

  return (
    <SaveTaskListAsTemplateContext.Provider
      value={{
        templatePayload,
        dispatchPayload,
        open,
        onClose,
        id,
        data,
        copyTaskEverything,
        isDisabledCustomFields,
        isDisabledTaskOptions,
      }}
    >
      {children}
    </SaveTaskListAsTemplateContext.Provider>
  );
}

export default SaveTaskListAsTemplateProvider;
