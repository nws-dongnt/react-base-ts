import { useEffect } from "react";
import { socketIO, ESocketListener, ESocketNameSpace } from "socket";

function SampleSocketUse() {
  useEffect(() => {
    const socketAuth = socketIO(ESocketNameSpace.AUTH);
    const socketNotification = socketIO(ESocketNameSpace.NOTIFICATION);

    socketAuth.on(ESocketListener.DISCONNECT, () => {
      socketAuth.connect();
    });

    socketAuth.on(ESocketListener.SAMPLE1, (message?: any) => {
      // handle logic here
      console.log(
        "🚀 ~ file: SampleUse.tsx:14 ~ socketAuth.on ~ message:",
        message,
      );
    });

    socketNotification.on(ESocketListener.SAMPLE2, (message?: any) => {
      // handle logic here
      console.log(
        "🚀 ~ file: SampleUse.tsx:20 ~ socketNotification.on ~ message:",
        message,
      );
    });

    return () => {
      socketAuth.off(ESocketListener.DISCONNECT);
      socketAuth.off(ESocketListener.SAMPLE1);
      socketNotification.off(ESocketListener.SAMPLE2);
    };
  }, []);

  return <div>Hello, Socket</div>;
}

export default SampleSocketUse;
