import React from 'react';

function MatrixAnimation() {
    const canvasRef = React.useRef(null);
    const [columns, setColumns] = React.useState([]);

    const letters = 'HELLO WORLD';
    const fontSize = 16;
    const columnsCount = Math.ceil(canvasRef.current?.offsetWidth / fontSize);
    const drops = [];

    // Initialize the drops array with random y positions for each column
    for (let i = 0; i < columnsCount; i++) {
        drops[i] = Math.floor(Math.random() * canvasRef.current?.offsetHeight);
    }

    React.useEffect(() => {
        // Update the drops array with new random y positions for each column
        for (let i = 0; i < columnsCount; i++) {
            drops[i] = Math.floor(Math.random() * canvasRef.current?.offsetHeight);
        }
    }, [columnsCount]);

    React.useEffect(() => {
        // Create the columns array with the letters in each column
        const newColumns = [];
        for (let i = 0; i < columnsCount; i++) {
            newColumns[i] = letters[Math.floor(Math.random() * letters.length)];
        }
        setColumns(newColumns);
    }, [columnsCount]);

    React.useEffect(() => {
        function animate() {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            // Clear the canvas
            context.fillStyle = '#0f1624';
            context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            // Set the font style
            context.font = `${fontSize}px arial`;

            // Set the text color
            context.fillStyle = '#00b8d4';

            // Draw the letters on the canvas
            for (let i = 0; i < columnsCount; i++) {
                context.fillText(columns[i], i * fontSize, drops[i] * fontSize);

                // Update the y position of each column
                if (drops[i] * fontSize > canvas.offsetHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            // Animate the matrix effect by calling this function again after a short delay
            setTimeout(animate, 35);
        }

        animate();
    }, [canvasRef, columns, columnsCount]);

    return <canvas ref={canvasRef} width={400} height={400} />;
}

export default MatrixAnimation;
