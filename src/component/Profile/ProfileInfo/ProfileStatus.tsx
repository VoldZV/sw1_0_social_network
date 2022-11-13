import React, {ChangeEvent} from 'react';

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: 'Hello'
    };

    changeEditmode = () => {
        this.setState({...this.state, editMode: !this.state.editMode})
    };

    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode && <span onDoubleClick={this.changeEditmode}>{this.state.status}</span>}
                </div>
                <div>
                    {this.state.editMode && <input onChange={this.changeStatus} autoFocus={true} onBlur={this.changeEditmode} value={this.state.status}/>}
                </div>
            </div>
        )
    };
};

