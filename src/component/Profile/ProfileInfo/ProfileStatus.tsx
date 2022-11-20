import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    changeStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    inputStatus: string
}

export class ProfileStatus extends React.Component<ProfileStatusType, ProfileStatusStateType> {
    state: ProfileStatusStateType = {
        editMode: false,
        inputStatus: this.props.status
    };

    changeEditmode = () => {
        this.setState({...this.state, editMode: !this.state.editMode})
    };

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, inputStatus: e.currentTarget.value})
    }

    onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        this.changeEditmode()
        this.props.changeStatus(this.state.inputStatus)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<ProfileStatusStateType>) {
        if(prevProps.status !== this.props.status) {
            this.setState({...this.state, inputStatus: this.props.status})
        }
    }



    render() {
        return (
            <div>
                <div style={{height:'20px', width:'150px', backgroundColor:'blue'}}>
                    {!this.state.editMode && <span onDoubleClick={this.changeEditmode}>{this.props.status}</span>}
                </div>
                <div style={{height:'20px', width:'150px', backgroundColor:'green'}}>
                    {this.state.editMode && <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.onBlurHandler} value={this.state.inputStatus}/>}
                </div>
            </div>
        )
    };
};

