import React from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'

/**
 * Rendering
 */
import BellRendering from './Core/Rendering/Bell'
import MobileFirstRendering from './Core/Rendering/MobileFirst'
import NotchRendering from './Core/Rendering/Notch'
import PolymorphicProp from './Core/Rendering/PolymorphicProp'

storiesOf('Core|Rendering', module)
  .add('Mobile-first', () => <MobileFirstRendering />)
  .add('Bell', () => <BellRendering />)
  .add('Notch', () => <NotchRendering />)
  .add('Polymorphic prop', () => <PolymorphicProp />)

/**
 * Responsive props
 */
import MobileFirstResponsiveProps from './Core/ResponsiveProps/MobileFirst'
import BreakpointSpecificResponsiveProps from './Core/ResponsiveProps/BreakpointSpecific'
import InclusiveNotchResponsiveProps from './Core/ResponsiveProps/InclusiveNotch'

storiesOf('Core|Responsive props', module)
  .add('Mobile-first', () => <MobileFirstResponsiveProps />)
  .add('Breakpoint-specific', () => <BreakpointSpecificResponsiveProps />)
  .add('Inclusive-notch', () => <InclusiveNotchResponsiveProps />)

/**
 * Configuration
 */
import ConfigCustomUnit from './Core/Configuration/CustomUnit'
import ConfigCustomBreakpoints from './Core/Configuration/CustomBreakpoints'

storiesOf('Core|Configuration', module)
  .add('Custom unit', () => <ConfigCustomUnit />)
  .add('Custom breakpoints', () => <ConfigCustomBreakpoints />)

/**
 * Composition
 */
import NestedComposition from './Components/Composition/NestedComposition'
import Templateless from './Components/Composition/Templateless'
import Namespace from './Components/Composition/Namespace'
import WeakArea from './Components/Composition/WeakArea'

storiesOf('Components|Composition', module)
  .add('Nested composition', () => <NestedComposition />)
  .add('Templateless', () => <Templateless />)
  .add('Weak area', () => <WeakArea />)
  .add('Namespace', () => <Namespace />)

/**
 * Only
 */
import OnlyDefault from './Components/Only/OnlyDefault'
import OnlyCustomBreakpoint from './Components/Only/OnlyCustomBreakpoint'
import OnlyCustomUnit from './Components/Only/OnlyCustomUnit'

storiesOf('Components|Only', module)
  .add('Default', () => <OnlyDefault />)
  .add('Custom breakpoint', () => <OnlyCustomBreakpoint />)
  .add('Custom default unit', () => <OnlyCustomUnit />)

/**
 * Hooks
 */
import UseViewportChange from './Hooks/UseViewportChange'
import UseResponsiveValue from './Hooks/UseResponsiveValue'
import UseBreakpointChange from './Hooks/UseBreakpointChange'
import UseResponsiveProps from './Hooks/UseResponsiveProps'

storiesOf('Hooks', module)
  .add('useViewportChange', () => <UseViewportChange />)
  .add('useResponsiveValue', () => <UseResponsiveValue />)
  .add('useBreakpointChange', () => <UseBreakpointChange />)
  .add('useResponsiveProps', () => <UseResponsiveProps />)

/**
 * Recipes
 */
import IterativeAreas from './Recipes/IterativeAreas'
import GridTemplate from './Recipes/GridTemplate'

storiesOf('Recipes|All', module)
  .add('Iterative areas', () => <IterativeAreas />)
  .add('Grid template', () => <GridTemplate />)

/**
 * Bugfixes
 */
import StylesUndefined from './Bugfixes/StylesUndefined'
import TemplateIndentation from './Bugfixes/TemplateIndentation'
import BoxDisplayOverride from './Bugfixes/BoxDisplayOverride'

storiesOf('Bugfixes|All', module)
  .add('Styles undefined', () => <StylesUndefined />)
  .add('Template indentation', () => <TemplateIndentation />)
  .add('Box display override', () => <BoxDisplayOverride />)

/**
 * Playground
 */
import PeriodExample from './Playground/PeriodExample'
import MediaQuery from './Playground/MediaQuery'

storiesOf('Playground', module)
  .add('Period', () => <PeriodExample />)
  .add('MediaQuery', () => <MediaQuery />)
