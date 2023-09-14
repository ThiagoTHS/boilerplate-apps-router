import { render, screen } from '@testing-library/react'

import Baniu from '.'

describe('<Baniu />', () => {
  it('should render the heading', () => {
    const { container } = render(<Baniu />)

    expect(screen.getByRole('heading', { name: /Baniu/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
