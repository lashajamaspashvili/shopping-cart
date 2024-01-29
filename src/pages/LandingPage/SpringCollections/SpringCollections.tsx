import { Link } from "react-router-dom";
import {
  SSpringCollections,
  SSpringCollectionsBlueText,
  SSpringCollectionsButton,
  SSpringCollectionsCountdown,
  SSpringCollectionsCountdownBox,
  SSpringCollectionsCountdownBoxWrapper,
  SSpringCollectionsCountdownDots,
  SSpringCollectionsCountdownNumber,
  SSpringCollectionsCountdownText,
  SSpringCollectionsInfo,
  SSpringCollectionsRedText,
  SSpringCollectionsText,
} from "./SSpringCollections.styled";
import Vector from "../../../assets/vector.svg";
import { useCountdown } from "./hooks/useCountDown";

export function SpringCollections({ targetDate }: { targetDate: number }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <SSpringCollections>
      <SSpringCollectionsInfo>
        <SSpringCollectionsText>
          <SSpringCollectionsBlueText>SPRING</SSpringCollectionsBlueText>{" "}
          <SSpringCollectionsRedText>COLLECTIONS</SSpringCollectionsRedText>
        </SSpringCollectionsText>
        <Link to="/products">
          <SSpringCollectionsButton>
            <span>SHOP NOW</span>
            <img src={Vector} />
          </SSpringCollectionsButton>
        </Link>
        {days + hours + minutes + seconds <= 0 ? null : (
          <SSpringCollectionsCountdown>
            <SSpringCollectionsCountdownBoxWrapper>
              <SSpringCollectionsCountdownBox>
                <SSpringCollectionsCountdownNumber>
                  {days > 9 ? days : "0" + days}
                </SSpringCollectionsCountdownNumber>
                <SSpringCollectionsCountdownText>
                  Days
                </SSpringCollectionsCountdownText>
              </SSpringCollectionsCountdownBox>
              <SSpringCollectionsCountdownDots>
                :
              </SSpringCollectionsCountdownDots>
            </SSpringCollectionsCountdownBoxWrapper>
            <SSpringCollectionsCountdownBoxWrapper>
              <SSpringCollectionsCountdownBox>
                <SSpringCollectionsCountdownNumber>
                  {hours > 9 ? hours : "0" + hours}
                </SSpringCollectionsCountdownNumber>
                <SSpringCollectionsCountdownText>
                  Hours
                </SSpringCollectionsCountdownText>
              </SSpringCollectionsCountdownBox>
              <SSpringCollectionsCountdownDots>
                :
              </SSpringCollectionsCountdownDots>
            </SSpringCollectionsCountdownBoxWrapper>
            <SSpringCollectionsCountdownBoxWrapper>
              <SSpringCollectionsCountdownBox>
                <SSpringCollectionsCountdownNumber>
                  {minutes > 9 ? minutes : "0" + minutes}
                </SSpringCollectionsCountdownNumber>
                <SSpringCollectionsCountdownText>
                  Minutes
                </SSpringCollectionsCountdownText>
              </SSpringCollectionsCountdownBox>
              <SSpringCollectionsCountdownDots>
                :
              </SSpringCollectionsCountdownDots>
            </SSpringCollectionsCountdownBoxWrapper>
            <SSpringCollectionsCountdownBoxWrapper>
              <SSpringCollectionsCountdownBox>
                <SSpringCollectionsCountdownNumber>
                  {seconds > 9 ? seconds : "0" + seconds}
                </SSpringCollectionsCountdownNumber>
                <SSpringCollectionsCountdownText>
                  Seconds
                </SSpringCollectionsCountdownText>
              </SSpringCollectionsCountdownBox>
            </SSpringCollectionsCountdownBoxWrapper>
          </SSpringCollectionsCountdown>
        )}
      </SSpringCollectionsInfo>
    </SSpringCollections>
  );
}
