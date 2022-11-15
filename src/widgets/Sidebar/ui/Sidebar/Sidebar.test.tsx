import { fireEvent, render, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { componentRender } from 'shared/lib/tests/compinentRender/componentRender'

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle ', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
