import eel

eel.init('web')

@eel.expose
def get_data():
    return "Got data from python"

eel.start(
        'index.html',
        mode='brave'  # Or whichever name u created at mode=='<some_name>' from before
) 
# eel.start('index.html')