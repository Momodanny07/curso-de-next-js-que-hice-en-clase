import { TaskProvider } from '../context/TasksContext'

export const metadata = {
 title: 'Next.js',
 description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
  <html lang='en'>
   <body>
    <TaskProvider>{children}</TaskProvider>
   </body>
  </html>
 )
}
