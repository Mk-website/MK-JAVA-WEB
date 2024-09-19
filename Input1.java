package input1;
class Input1
	{
	public static void main(String st[])  
		{
		char ch = ' ';
		java.io.InputStreamReader isr = new java.io.InputStreamReader(System.in);
			try 
			{
			System.out.println("Enter any character");
			 ch = (char)isr.read();
			System.out.println(ch);
			}
			catch( java.io.IOException ex)
				{
				System.out.println(ex.getMessage());
				}
			catch(Throwable th)
			{
				System.out.println(th.getMessage());

			}
		}
	}