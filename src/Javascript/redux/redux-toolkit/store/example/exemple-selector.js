// import { createSelector } from '@reduxjs/toolkit'

// export const templateCenterSelectors = {
//   listMappedProjectTemplates: createSelector(
//     (state) => state.templateCenter.categories,
//     (state) => state.templateCenter.projectTemplates,
//     (categories, projectTemplates) => {
//       const mappedList = (projectTemplates ?? []).map((template) => {
//         const { project, member, date, id } = template || {}
//         const category = template?.template_category_id
//           ? categories?.find(
//               (item) => item.id === template?.template_category_id
//             )
//           : { id: 0, name: i18n.t('TemplateCenter.Uncategorized') }
//         return {
//           id,
//           name: project?.name,
//           description: project?.description,
//           member,
//           date,
//           category,
//           projectId: project?.id,
//           displayColor: project?.display_color,
//           display: true,
//           templateType: {
//             id: NutcacheConstants.TemplateCenterTypes.Project,
//             name: i18n.t('TemplateCenter.TemplateTypeProject'),
//           },
//         }
//       })

//       const categorized = mappedList.filter(
//         (template) =>
//           template?.category?.name !== i18n.t('TemplateCenter.Uncategorized')
//       )
//       const uncategorized = mappedList.filter(
//         (template) =>
//           template?.category?.name === i18n.t('TemplateCenter.Uncategorized')
//       )

//       return [...uncategorized, ...categorized]
//     }
//   ),
// }
