import React, { cloneElement, useEffect, useRef, useState } from 'react';
import ConfirmationPopup from '../components/ConfirmationPopup';
import DowngradeToFreePopup from '../pages/account/DowngradeToFreePopup';
import HolidayGroupPopup from '../pages/company/holiday/HolidayGroupPopup';
import HolidayPopup from '../pages/company/holiday/HolidayPopup';
import ImportDefaultHolidaysPopup from '../pages/company/holiday/ImportDefaultHolidaysPopup';
import CreateLeavePopup from '../pages/company/leave/CreateLeavePopup';
import WorkloadAssignMemberToProjectPopup from '../pages/workload/WorkloadAssignMemberToProjectPopup';
import EditLeavePopup from '../pages/company/leave/EditLeavePopup';
import AssignMemberPopup from '../pages/member/AssignMemberPopup';
import EditAvatarPopup from '../pages/profile/EditAvatarPopup';
import DuplicateProjectPopup from '../pages/project/duplicate-project-popup/DuplicateProjectPopup';
import EditProjectPopup from '../pages/project/project-popup/EditProjectPopup';
import ProjectDeleteConfirmation from '../pages/project/project-popup/ProjectDeleteConfirmation';
import ProjectPopup from '../pages/project/project-popup/ProjectPopup';
import ProjectRatePopup from '../pages/project/ProjectRatePopup';
import CreateEditTaskListRulePopup from '../pages/task-list/automation/CreateEditTaskListRulePopup';
import TaskListRulePopup from '../pages/task-list/automation/TaskListRulePopup';
import CreateTaskListPopup from '../pages/task-list/CreateTaskListPopup';
import DuplicateTaskListPopup from '../pages/task-list/DuplicateTaskListPopup';
import EditTaskListPopup from '../pages/task-list/EditTaskListPopup';
import MoveStatusPopup from '../pages/task-status/MoveStatusPopup';
import RestoreArchivedStatuses from '../pages/task-status/RestoreArchivedStatusesPopup';
import AttachmentPreviewPopup from '../pages/task/attachment/AttachmentPreviewPopup';
import DuplicateTaskPopup from '../pages/task/DuplicateTaskPopup';
import MarkAsDonePopup from '../pages/task/MarkAsDonePopup/MarkAsDonePopup';
import SubtaskPopup from '../pages/task/SubtaskPopup';
import TaskPopup from '../pages/task/TaskPopup';
import TimeEntryDeleteConfirmation from '../pages/time-entry/TimeEntryDeleteConfirmation';
import TimeEntryPopup from '../pages/time-entry/TimeEntryPopup';
import TimesheetConfirmationPopup from '../pages/time-entry/TimesheetConfirmationPopup';
import MultipleTimeEntriesPopup from '../pages/time-sheet/MultipleTimeEntriesPopup';
import GlobalSearchPopup from '../pages/global-search/GlobalSearchPopup';
import WorkspaceUpsellPopup from '../pages/workspace/WorkspaceUpsellPopup';
import WorkspacePopup from '../pages/workspace/WorkspacePopup';
import DeactivateIntegrationPopup from '../pages/integration/DeactivateIntegrationPopup';
import RecurringTaskDeleteConfirmationPopup from '../pages/task/RecurringTaskDeleteConfirmationPopup';
import UrlHelper from './url-helper';
import TaskListCustomFieldsPopup from '../pages/custom-fields/TaskListCustomFieldsPopup';
import TaskListCustomFieldPopup from '../pages/custom-fields/TaskListCustomFieldPopup';
import ServicePopup from '../pages/company/services/ServicePopup';
import ServiceConfirmationPopup from '../pages/company/services/ServiceConfirmationPopup';
import TeamPopup from '../pages/company/teams/TeamPopup';
import CustomFieldsDeleteConfirmationPopup from '../pages/custom-fields/CustomFieldsDeleteConfirmationPopup';
import TaskCustomFieldsWarningConfirmationPopup from '../pages/custom-fields/TaskCustomFieldsWarningConfirmationPopup';
import MarkStatusAsDonePopup from '../pages/task-status/MarkStatusAsDonePopup';
import TimerPopup from '../pages/timer/TimerPopup';
import TimerServiceDeleteConfirmationPopup from '../pages/timer/TimerServiceDeleteConfirmationPopup';
import TaskDependenciesPopup from '../pages/task/dependency/TaskDependenciesPopup';
import InvoicePaymentPopup from '../pages/company/payments/InvoicePaymentPopup';
import ExpensePaymentPopup from '../pages/company/payments/ExpensePaymentPopup';
import TaxPopup from '../pages/company/Tax/TaxPopup';
import ProductPopup from '../pages/company/product/ProductPopup';
import SaveProjectAsTemplatePopup from '../pages/project/save-project-as-template-popup/SaveProjectAsTemplatePopup';
import DeleteTemplatePopup from '../pages/template-center/popups/DeleteTemplatePopup';
import DeleteCategoryConfirmationPopup from '../pages/template-center/popups/DeleteCategoryConfirmationPopup';
import DeleteCategoryWarningPopup from '../pages/template-center/popups/DeleteCategoryWarningPopup';
import SaveTaskListAsTemplatePopup from '../pages/task-list/save-task-list-as-template-popup/SaveTaskListAsTemplatePopup';
import EditCategoryPopup from '../pages/template-center/popups/EditCategoryPopup';
import TimesheetRowDeleteConfirmationPopup from '../pages/time-sheet/timesheets/TimesheetRowDeleteConfirmationPopup';
import TimesheetNewRowPopup from '../pages/time-sheet/timesheets/TimesheetNewRowPopup';
import DeleteCheckListTemplatePopup from '../pages/template-center/popups/DeleteCheckListTemplatePopup';
import ApplyCheckListTemplatePopup from '../pages/task/checklist/check-list-template/ApplyCheckListTemplatePopup';
import SaveChecklistAsTemplatePopup from '../pages/template-center/checklist-template/SaveChecklistAsTemplatePopup';
import UseChecklistTemplatePopup from '../pages/template-center/popups/UseChecklistTemplatePopup';
import CreateRolePopup from '../pages/roles-management/create-role/CreateRolePopup';

function PopupHelper({ initialDataLoaded = false }) {
  const [openedPopups, _setOpenedPopups] = useState(new Map());
  const openedPopupsRef = useRef(openedPopups);

  const setOpenedPopups = (data) => {
    openedPopupsRef.current = data;
    _setOpenedPopups(data);
  };

  const onClosePopup = (id) => {
    if (id === 'task-popup') {
      UrlHelper.removeUrlParameters('taskId', 'Edit');
      window.history.pushState({}, '', window.location.href);
    }

    const updatedOpenedPopups = new Map(openedPopupsRef.current);
    updatedOpenedPopups.delete(id);
    setOpenedPopups(updatedOpenedPopups);
  };

  const showPopup = (popupId, data, closeCurrentPopupWithSameId) => {
    const popups = {
      'time-entry': <TimeEntryPopup />,
      'create-edit-task-list-rule': <CreateEditTaskListRulePopup />,
      'task-list-rule': <TaskListRulePopup />,
      'task-popup': <TaskPopup />,
      'subtask-popup': <SubtaskPopup />,
      'attachment-preview-popup': <AttachmentPreviewPopup />,
      'confirmation': <ConfirmationPopup />,
      'move-status-popup': <MoveStatusPopup />,
      'project-popup': <ProjectPopup />,
      'edit-project-popup': <EditProjectPopup />,
      'duplicate-task-list-popup': <DuplicateTaskListPopup />,
      'duplicate-task-popup': <DuplicateTaskPopup />,
      'restore-archived-statuses-popup': <RestoreArchivedStatuses />,
      'assign-member-popup': <AssignMemberPopup />,
      'downgrade-to-free-popup': <DowngradeToFreePopup />,
      'timesheet-confirmation-popup': <TimesheetConfirmationPopup />,
      'import_default_holidays': <ImportDefaultHolidaysPopup />,
      'holiday-group-popup': <HolidayGroupPopup />,
      'holiday-popup': <HolidayPopup />,
      'time-entry-delete-confirmation': <TimeEntryDeleteConfirmation />,
      'create-task-list-popup': <CreateTaskListPopup />,
      'edit-task-list-popup': <EditTaskListPopup />,
      'create-leave-popup': <CreateLeavePopup />,
      'workload-scheduler-assign-project-popup': <WorkloadAssignMemberToProjectPopup />,
      'duplicate-project-popup': <DuplicateProjectPopup />,
      'project-delete-confirmation': <ProjectDeleteConfirmation />,
      'multiple-time-entries-popup': <MultipleTimeEntriesPopup />,
      'edit-leave-popup': <EditLeavePopup />,
      'edit-avatar-popup': <EditAvatarPopup />,
      'project-rate-popup': <ProjectRatePopup />,
      'mark-as-done-popup': <MarkAsDonePopup />,
      'global-search-popup': <GlobalSearchPopup />,
      'workspace-upsell-popup': <WorkspaceUpsellPopup />,
      'workspace-popup': <WorkspacePopup />,
      'service-popup': <ServicePopup />,
      'service-confirmation-popup': <ServiceConfirmationPopup />,
      'deactivate-integration': <DeactivateIntegrationPopup />,
      'team-popup': <TeamPopup />,
      'custom-field-manage-popup': <TaskListCustomFieldsPopup />,
      'custom-field-create-popup': <TaskListCustomFieldPopup />,
      'custom-fields-delete-confirmation-popup': <CustomFieldsDeleteConfirmationPopup />,
      'custom-fields-warning-confirmation-popup': <TaskCustomFieldsWarningConfirmationPopup />,
      'mark-status-as-done-popup': <MarkStatusAsDonePopup />,
      'timer-popup': <TimerPopup />,
      'recurring-task-delete-confirmation-popup': <RecurringTaskDeleteConfirmationPopup />,
      'timer-service-delete-confirmation-popup': <TimerServiceDeleteConfirmationPopup />,
      'task-dependencies-popup': <TaskDependenciesPopup />,
      'invoice-payment-popup': <InvoicePaymentPopup />,
      'expense-payment-popup': <ExpensePaymentPopup />,
      'tax-popup': <TaxPopup />,
      'product-popup': <ProductPopup />,
      'save-project-as-template-popup': <SaveProjectAsTemplatePopup />,
      'delete-template-popup': <DeleteTemplatePopup />,
      'template-center-delete-category-confirmation-popup': <DeleteCategoryConfirmationPopup />,
      'template-center-delete-category-warning-popup': <DeleteCategoryWarningPopup />,
      'save-task-list-as-template-popup': <SaveTaskListAsTemplatePopup />,
      'edit-category-popup': <EditCategoryPopup />,
      'timesheet-delete-row-confirmation-popup': <TimesheetRowDeleteConfirmationPopup />,
      'timesheet-new-row-popup': <TimesheetNewRowPopup />,
      'delete-check-list-template-popup': <DeleteCheckListTemplatePopup />,
      'apply-check-list-template-popup': <ApplyCheckListTemplatePopup />,
      'save-checklist-as-template-popup': <SaveChecklistAsTemplatePopup />,
      'use-checklist-template': <UseChecklistTemplatePopup />,
      'create-role-popup': <CreateRolePopup />,
    };
    if (closeCurrentPopupWithSameId && openedPopupsRef.current.has(popupId)) {
      onClosePopup(popupId);
    }
    if (Object.prototype.hasOwnProperty.call(popups, popupId) && !openedPopupsRef.current.has(popupId)) {
      const updatedOpenedPopups = new Map(openedPopupsRef.current);
      const popupComponent = cloneElement(popups[popupId], {
        key: popupId,
        id: popupId,
        open: true,
        onClose: onClosePopup,
        data,
      });
      updatedOpenedPopups.set(popupId, popupComponent);
      setOpenedPopups(updatedOpenedPopups);
    }
  };

  useEffect(() => {
    document.addEventListener('open-react-popup', (e) => {
      showPopup(e.detail.popupId, e.detail.data, e.detail.closeCurrentPopupWithSameId);
    });
  }, []);

  useEffect(() => {
    const taskPopupUrlPattern = /\/Project\/Edit\/\d+\?(projectBoardCardId|taskId)=\d+/gi;
    if (taskPopupUrlPattern.test(window.location.href)) {
      const urlParams = new URLSearchParams(window.location.search);
      const taskId = urlParams.get('taskId') ?? urlParams.get('projectBoardCardId');
      window.openReactPopup('task-popup', { taskId: Number.parseInt(taskId, 10) });
    }

    const subtaskPopupUrlPattern = /\/Project\/Edit\/\d+\?subtaskId=\d+/gi;
    if (subtaskPopupUrlPattern.test(window.location.href)) {
      const urlParams = new URLSearchParams(window.location.search);
      const subtaskId = urlParams.get('subtaskId');
      window.openReactPopup('subtask-popup', { subtaskId: Number.parseInt(subtaskId, 10) });
    }
  }, []);

  return initialDataLoaded && Array.from(openedPopups.values()).map((popup) => popup);
}

export default PopupHelper;
