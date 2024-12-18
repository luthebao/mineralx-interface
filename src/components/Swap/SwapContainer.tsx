import { Paper } from '@material-ui/core';
import SwapCore from './SwapCore';

function SwapContainer() {
    return (
        <div className="flex justify-center items-center">
            <Paper elevation={0} className="max-w-[750px] w-full p-[30px] flex flex-col bg-card">
                <SwapCore />
            </Paper>
        </div>
    )
}

export default SwapContainer
