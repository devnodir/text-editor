import React, { useState } from 'react'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/colors.min.js';

// Import a language file.
import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/third_party/font_awesome.min.js';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';


const App = () => {
  const [model, setModel] = useState('')

  const config = {
    dragInline: false,
    fileUpload: false,
    autofocus: true,
    formMultipleStyles: false,
    quickInsertEnabled: false,
    toolbarButtons:
      [
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'paragraphFormat',
        'fontFamily',
        'fontSize',
        'textColor',
        'backgroundColor',
        'clearFormatting',
        'align',
        'formatOL',
        'formatUL',
        'lineHeight',
        'outdent',
        'indent',
        'insertTable',
        'emoticons',
        'fontAwesome',
        'specialCharacters',
        'insertImage',
        'getPDF',
        'embedly',
        'insertLink',
        'quote',
        'print',
        'insertHR',
        'fullscreen',
        'undo',
        'redo',
      ],
    placeholderText: 'Bu yerga formani kiritng',
    toolbarBottom: false,
    colorsText: [
      '#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC',
      '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000',
      '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF',
      '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#D1D5D8', 'REMOVE'
    ],
    colorsBackground: [
      '#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC',
      '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000',
      '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF',
      '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#D1D5D8', 'REMOVE'
    ],
    colorsHEXInput: true,
    colorsButtons: ["color"],
    colorsStep: 14
  }

  return (
    <React.Fragment>
      <FroalaEditorComponent tag='textarea' model={model} onModelChange={setModel} config={config} />
      <div style={{ border: '1px solid #CCCCCC', borderRadius: '10px', marginTop: '20px', minHeight: '80px', padding: '16px' }}>
        {model}
      </div>
    </React.Fragment>
  )
}

export default App
