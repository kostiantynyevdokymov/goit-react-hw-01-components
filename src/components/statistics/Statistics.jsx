import PropTypes from 'prop-types';
import { Card, Statlist, Title, Item, Label, Percentage} from './Statistics.styled'

export const Statistics = ({ props, title}) => {
    return (
        <Card>
  {title && <Title>{title}</Title>}

            <Statlist>
                {props.map(({ id, label, percentage }) =>
<Item>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Item> )}
  </Statlist>
</Card>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    props: PropTypes.arrayOf(
        PropTypes.exact ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )

}