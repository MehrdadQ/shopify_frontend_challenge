export const styles = {
    container: {
        "position": "relative",
        "background-color": "rgb(29, 53, 87)",
        "color": "rgb(241, 250, 238)"
    },
    form_group: {
        "position": "relative",
        "padding-top": "20px"
    },
    input_box: {
        "background-color": "rgb(241, 250, 238)",
        "height": "150px",
        '&:focus': {
            "background-color": "rgb(241, 250, 238)"
        }
    },
    button: {
        "margin-top": "6px",
        "transition": "all 0.5s",
        "padding": "8px",
        "border-radius": "3px",
        "font-weight": "bold",
        "border": "1px solid black",
        "background-color": "rgb(241, 250, 238)",
        "color": "rgb(29, 53, 87)",
        '&:hover': {
            "background-color": "rgb(29, 53, 87)",
            "color": "rgb(241, 250, 238)",
            "border": "1px solid rgb(241, 250, 238)",
        }
    },
    delete_button: {
        "margin-top": "6px",
        "transition": "all 0.5s",
        "padding": "8px",
        "border-radius": "3px",
        "font-weight": "bold",
        "background-color": "rgb(29, 53, 87)",
        "color": "rgb(200, 60, 60)",
        "border": "1px solid rgb(200, 60, 60)",
        '&:hover': {
            "border": "1px solid black",
            "background-color": "rgb(200, 60, 60)",
            "color": "rgb(241, 250, 238)",
        }
    },
    top_bar: {
        "margin-top": "20px",
        "display": "flex",
        "justify-content": "space-between" 
    },
    dropdown: {
        "width": "fit-content",
        "background-color": "rgb(241, 250, 238)",
    },
    no_responses_yet: {
        "margin-top": "80px"
    }
}