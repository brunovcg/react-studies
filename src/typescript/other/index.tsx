import { styles } from '../styles'
import { ExtractProps } from './ExtractComponentProp'
import { Html } from './HTML'
import { Toast } from './TemplateLiterals/toast'
import { Text } from './polymorphicComponents/text'

export const OtherTypescript = () => {
  return (
    <div style={styles.style1}>
      <h2>Other tasks</h2>

      <h4 style={styles.style4}>Template Literals</h4>
      <Toast position={'center'} />

      <h4 style={styles.style4}>HTML Wrapping</h4>
      <Html />

      <h4 style={styles.style4}>Extract Component Prop Types</h4>
      <ExtractProps myName={'bruno'} messageCount={0} />

      <h4 style={styles.style4}>Polymorphic Components</h4>
      <Text as="h5" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm" color="secondary">
        Label
      </Text>
    </div>
  )
}
