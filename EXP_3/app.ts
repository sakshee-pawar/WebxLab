window.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result') as HTMLInputElement;
    
    // Function to append value to the display
    function appendValue(value: string) {
      result.value += value;
    }
  
    // Function to clear the display
    function clearResult() {
      result.value = '';
    }
  
    // Function to calculate the result
    function calculateResult() {
      try {
        result.value = eval(result.value).toString();
      } catch (error) {
        result.value = 'Error';
      }
    }
  
    // Add event listeners to the buttons
    const buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value')!;
        
        if (value === 'C') {
          clearResult();
        } else if (value === '=') {
          calculateResult();
        } else {
          appendValue(value);
        }
      });
    });
  });
  
