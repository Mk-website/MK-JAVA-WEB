package input2;
class Input2
	{
	public static void main(String st[])  		{
		java.io.InputStreamReader isr = new java.io.InputStreamReader(System.in);
		java.io.BufferedReader  input = new java.io.BufferedReader(isr);
			//int x = isr.read();
			//System.out.println(x);

			try
			{
			System.out.println("Enter Somrthing");
			String inp=input.readLine();
			System.out.println(inp);
			}
		catch(java.io.IOException e)
			{
			System.out.println(e.getMessage());
			}

			catch(Throwable th)
			{
				System.out.println(th.getMessage());

			}

		}
	}