import React from 'react'
import { ResponsiveBar } from '@nivo/bar'



const config = {
    keys: ["Iron Sheet", "Copper Sheet"],
    margin: 2,
    axisBotton: "Days",
    axisTop: "quantity"
}

class IMAChart extends React.Component {
    render() {
        return (
            <div className="chart">
                <ResponsiveBar
                    data={this.props.data}
                    keys={config.keys}
                    indexBy="country"
                    margin={config.margin}
                    padding={0.3}
                    colors="nivo"
                    colorBy="id"
                    // defs={config.defs}
                    // fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    // legends={config.legends}
                />
                <style jsx>{
                    `
                   .chart {
                        height:50vh;
                        width:60vw;
                        background: white;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                        transition: 0.3s;
                    }
                    
                    .chart:hover {
                         box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }
                    `
                }
                </style>
            </div>
        )
    }
}

export default IMAChart