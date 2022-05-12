import figurl as fig


class VisualizationTemplate:
    def __init__(self, text: str) -> None:
        self._text = text
    def url(self, *, label: str):
            # Prepare the data for the figURL
            data = {
                'text': self._text
            }

            # Prepare the figurl Figure
            F = fig.Figure(
                view_url='gs://figurl/visualization-template-1',
                data=data
            )
            url = F.url(label=label)
            return url