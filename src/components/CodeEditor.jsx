import React, { useState } from 'react';
import { Box, Button, Flex, Textarea, VStack } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // For simplicity, we use eval for JavaScript code execution
      // In a real-world scenario, you should use a safer method
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <Button leftIcon={<FaPlay />} colorScheme="blue" onClick={runCode}>
        Run
      </Button>
      <Box>
        <Textarea value={output} readOnly placeholder="Output will be displayed here..." />
      </Box>
    </VStack>
  );
};

export default CodeEditor;