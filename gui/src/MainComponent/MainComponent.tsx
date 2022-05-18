import { FunctionComponent } from 'react';
import { validateObject } from '../figurl';
import { isString } from '../figurl/viewInterface/validateObject';

export type VisualizationTemplateData = {
    text: string
}
export const isVisualizationTemplateData = (x: any): x is VisualizationTemplateData => {
    return validateObject(x, {
        text: isString
    })
}

type Props = {
    data: VisualizationTemplateData
    width: number
    height: number
}

const MainComponent: FunctionComponent<Props> = ({data}) => {
    const {text} = data
    return (
        <div>
            <h3>Visualization template</h3>
            <p>Text: <pre>{text}</pre></p>
        </div>
    )
}

export default MainComponent